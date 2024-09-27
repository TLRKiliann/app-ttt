"use client";

import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

export default function EmailComp(): JSX.Element {

    const [email, setEmail] = useState<string>("");
    const [objEmail, setObjEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event?.target.value)
    };

    const handleObject = (event: React.ChangeEvent<HTMLInputElement>) => {
        setObjEmail(event?.target.value);
    };

    const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event?.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSuccess("");
        setError("");
    
        if (!email) {
            setError("Pas d'email entré...");
            return;
        }
    
        if (!message) {
            setError("Pas de message écrit...");
            return;
        }
    
        const templateParams = {
            from_name: email,
            to_name: "esteban",
            message,
            subject: objEmail
        };

        setIsLoading(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            );
            setEmail("");
            setObjEmail("");
            setMessage("");
            setSuccess("Message envoyé !");
        } catch (error) {
            setError("Erreur durant l'envoi du message...");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-between w-[340px] md:w-[500px] h-auto
            dark:bg-slate-950/70 bg-gradient-to-tr from-sky-500/30 to-red-500/30 m-auto px-4 md:px-10 py-6 rounded-md'>
            <div className='mb-6'>
                <h3 className='text-base md:text-2xl font-bold font-mono'>
                    Envoyer un email
                </h3>
            </div>

            <div className='flex flex-row items-center justify-between'>
                <label htmlFor="email" className='text-base md:text-xl font-bold font-mono'>Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={handleEmail} 
                    placeholder='ton_adresse_email@mail.com'
                    required 
                    className='w-full md:w-[300px] text-slate-500 bg-slate-900/50 border-2 border-solid 
                    border-gray-600 placeholder:text-slate-500 transition ease-in-out focus:text-slate-400 
                    focus:border-sky-500 focus:outline-none focus:placeholder:text-slate-500
                    m-0 px-2 py-[8px] rounded'
                />
            </div>

            <div className='flex flex-row items-center justify-between my-4'>
                <label htmlFor="objet" className='text-base md:text-xl font-bold font-mono'>Sujet:</label>
                <input
                    type="text"
                    id="objet"
                    name="objet"
                    value={objEmail}
                    onChange={handleObject}
                    placeholder='Questions, critiques, etc...'
                    required 
                    className='w-full md:w-[300px] text-slate-500 bg-slate-900/50 border-2 border-solid 
                    border-gray-600 placeholder:text-slate-500 transition ease-in-out focus:text-slate-400 
                    focus:border-sky-500 focus:outline-none focus:placeholder:text-slate-500
                    m-0 px-2 py-[8px] rounded'
                />
            </div>

            <div className='flex flex-col items-start justify-center'>
                <label htmlFor="textMsg" className='text-base md:text-xl font-bold font-mono'>Message:</label>
                <textarea
                    name="textMsg"
                    id="textMsg"
                    cols={30}
                    rows={10}
                    value={message}
                    onChange={handleMessage}
                    placeholder="Ecrivez votre message ici..."
                    className='w-full text-slate-500 bg-slate-900/50 border-2 border-solid 
                    border-gray-600 placeholder:text-slate-500 transition ease-in-out focus:text-slate-400 
                    focus:border-sky-500 focus:outline-none focus:placeholder:text-slate-500
                    mt-2 mb-4 px-2 py-1 rounded'
                >
                </textarea>
            </div>

            <div className='flex items-center justify-center w-full h-auto'>

                <button 
                    type="submit" 
                    className='w-full font-bold font-mono transform duration-200 ease-in-out bg-blue-500 
                    hover:bg-blue-600 hover:scale-105 active:bg-blue-700 active:scale-95 py-[5px] disabled:opacity-50
                    shadow-md rounded'
                    disabled={isLoading ? true : false}
                >
                    {isLoading ? "Loading..." : "Envoyer"}
                </button>
            </div>

            {success ? (
                <p className='text-center text-green-500 mt-4'>{success}</p>
            ) : error ? (
                <p className='text-center text-orange-500 mt-4'>{error}</p>
            ) : null}

        </form>
    )
}
