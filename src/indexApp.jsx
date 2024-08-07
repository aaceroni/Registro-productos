import React, { useEffect, useState } from "react";
import { Tabla } from "./components/Tabla";
import { Formulario } from "./components/formApp";
import { db } from './components/firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';
import ConfirmacionModal from './components/ConfirmacionModal';

export const Index = () => {
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'productos'), (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(data);
        });

        return () => unsubscribe();
    }, []);

    const addDatos = async (valores) => {
        try {
            if (editIndex === null) {
                const newDocRef = doc(collection(db, 'productos'));
                await setDoc(newDocRef, valores);
                console.log("Documento añadido con éxito");
            } else {
                const docRef = doc(db, 'productos', data[editIndex].id);
                await updateDoc(docRef, valores);
                console.log("Documento actualizado con éxito");
                setEditIndex(null);
            }
        } catch (error) {
            console.error("Error al añadir/actualizar el documento: ", error);
        }
    };

    const delData = async () => {
        try {
            if (selectedItemId) {
                await deleteDoc(doc(db, 'productos', selectedItemId));
                console.log("Documento eliminado con éxito");
                setShowModal(false); // Oculta el modal después de eliminar
            }
        } catch (error) {
            console.error("Error al eliminar el documento: ", error);
        }
    };

    const handleConfirmDelete = (id) => {
        setSelectedItemId(id);
        setShowModal(true);
    };

    const editData = (index) => {
        setEditIndex(index);
    };

    return (
        <>
            <h1 className="bg-danger p-5 text-white text-center">REGISTRO DE INVENTARIO</h1>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-4">
                        <Formulario addNew={addDatos} data={data[editIndex]} />
                    </div>
                    <div className="col-8">
                        <Tabla datos={data} editar={editData} eliminar={handleConfirmDelete} />
                    </div>
                </div>
            </div>
            <ConfirmacionModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleConfirm={delData}
            />
        </>
    );
};
