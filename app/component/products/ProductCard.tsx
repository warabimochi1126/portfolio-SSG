"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { StaticImageData } from "next/image";

import { ImageComponent } from "./ImageComponent";
import { OverViewDescription } from "./OverViewDescription";
import { DetailProductName } from "./DetailProductName";
import { DetailOverView } from "./DetailOverView";
import { DetailMainTechnology } from "./DetailMainTechnology";
import { DetailProductLink } from "./DetailProductLink";
import { DetailImage } from "./DetailImage";

const modalStyle = {
    overlay: {
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.85)"
    },
    content: {
      top: "10rem",
      left: "10rem",
      right: "10rem",
      bottom: "10rem",
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "1rem"
    }
};

interface ProductCardProps {
    imageData: StaticImageData | string;
    altStr: string;
    title: string;
    overViewDescription: string;
    deployUrl?: string;
    overViewStrArray: string[];
    mainTechStrArray: string[];
    subTechStrArray?: string[];
    children?: React.ReactNode;
}  

export function ProductCard({ imageData, altStr, title, overViewDescription, deployUrl, overViewStrArray, mainTechStrArray, subTechStrArray, children }: ProductCardProps) {
    const [ modalIsOpen, setIsOpen ] = useState(false);

    return (
        <div className="App">
            <motion.div
                className="w-56 h-56 border-2 rounded-2xl mx-auto" 
                whileHover={{ scale: 1.2, transition: { duration: 0.2 }}}
                onClick={() => setIsOpen(true)}
            >
                <ImageComponent imageData={imageData} altStr={altStr} />
                <OverViewDescription title={title} overViewDescription={overViewDescription} />
            </motion.div>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle}>
                <DetailImage url={deployUrl} imageData={imageData} />

                <div className="space-y-2">
                    <DetailProductName productName={title} />
                    <DetailOverView overViewStrArray={overViewStrArray} />
                    <DetailMainTechnology mainTechStrArray={mainTechStrArray} subTechStrArray={subTechStrArray} />
                    <DetailProductLink>
                        { children }
                    </DetailProductLink>
                </div>
            </Modal>
        </div>
    )
}