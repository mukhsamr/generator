"use client";

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Alert from "@/components/Alert";

export default function Page() {
    const [url, setUrl] = useState("");
    const [alert, setAlert] = useState({ status: "", msg: "" });


    const downloadQR = () => {
        const canvas = document.getElementById("qr");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const copyQR = () => {
        const canvas = document.getElementById("qr");
        canvas.toBlob((blob) => {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item])
                .then(() => setAlert({ status: "success", msg: "QR code copied successfully!" }))
                .catch(() => setAlert({ status: "error", msg: "Failed to copy QR code." }));
        });
    };

    useEffect(() => {
        if (alert.status !== '') {
            const timer = setTimeout(() => setAlert({ status: '', msg: '' }), 3000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-transparent">
            <div className="max-w-3xl text-center">
                {alert.status && (
                    <Alert message={alert.msg} variant={alert.status} />
                )}
                <div className="p-12 bg-white bg-opacity-20 rounded-lg backdrop-filter backdrop-blur-lg border border-white border-opacity-30 shadow-md">
                    <div className="p-3 bg-white bg-opacity-30 rounded-xl backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-md transition-transform duration-300 hover:scale-105">
                        <QRCodeCanvas id="qr" value={url} size={200} includeMargin={true} />
                    </div>
                    <div className="mt-6 space-y-2">
                        <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" className="transition-transform duration-500 focus:scale-105" />
                    </div>
                    <div className="p-4 flex justify-center gap-x-2">
                        <Button onClick={downloadQR} variant="secondary" size="sm" className="transform transition-transform duration-500 hover:scale-110">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                <path d="M7 11l5 5l5 -5" />
                                <path d="M12 4l0 12" />
                            </svg>
                        </Button>
                        <Button onClick={copyQR} variant="secondary" size="sm" className="transform transition-transform duration-500 hover:scale-110">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 15l6 -6" />
                                <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
