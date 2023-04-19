"use client";
import styles from "./services.module.css";
import React, { useEffect, useState,} from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  type Data={
      Full_Name:string;
      Email:string;
      Contact:number;
      Subject:string;
      Message:string
  }

  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [contact,setContact]=useState("");
  let [message,setMessage]=useState("");
  let [subject,setSubject]=useState("");
  async function Submit(){
    if(!name||!email||!contact||!message||!subject){
      return alert("Please fill all fields")
    }
    else{
      let model:Data={
        Full_Name:name,
        Email:email,
        Contact:contact,
        Subject:subject,
        Message:message
      }
      if(model.Email!==""){
        emailjs.send('service_zu8mydb', 'template_cq8m8id',model, 'i26Ov9qViqq9P-_ma')
      .then((result) => {
          alert("messsage succesfully sent");
      }, (error) => {
          alert(error.text);
      });
    }

    }
  }

  return (
    <div id="Contact" className="px-5 md:px-11 py-4 flex flex-col gap-6 mt-20 items-center sm:px-8">
      <div className="border-3 xl:w-48 flex sm:w-48 sm:p-2 justify-center items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">mail</span>
        <h1 className="text-white font-bold text-center xl:text-2xl text-xl font-sans">
          CONTACT
        </h1>
      </div>
      <div className="self-start mt-6">
        <h1 className="xl:text-5xl text-white sm:text-4xl font-Kurale text-3xl">Let&apos;s Work<span className="text-SecondaryColor"> Together!</span></h1>
        <h1 className="text-white font-bold font-Kurale text-xl mt-2 sm:text-2xl xl:text-3xl">talalzafar84@gmail.com</h1>
      </div>
      <div className="w-full mt-4 mmd:p-4 flex  flex-col gap-6 md:flex-wrap md:flex-row md:justify-between md:flex">
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input onChange={(e)=>setName(e.target.value)} className="text-lg xl:text-xl text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Enter Your Name"/>
        <label className=" text-white text-xl xl:text-2xl">Full Name</label>
        </div>
        <div className="flex md:w-5/12  flex-col-reverse gap-1 font-Kurale">
        <input onChange={(e)=>setEmail(e.target.value)} className="text-lg xl:text-xl text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" type="email" placeholder="Enter Your Email"/>
        <label className=" text-white text-xl xl:text-2xl">Email</label>
        </div>
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input type="number" onChange={(e)=>setContact(e.target.value)} className="text-lg xl:text-xl text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="xxxx-xxxxxxx"/>
        <label className=" text-white text-xl xl:text-2xl">Contact</label>
        </div>
        <div className="flex md:w-5/12 flex-col-reverse gap-1 font-Kurale">
        <input onChange={(e)=>setSubject(e.target.value)} className="text-lg xl:text-xl text-white input bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-9 outline-0" placeholder="Write Here..."/>
        <label className=" text-white text-xl xl:text-2xl">Subject</label>
        </div>
        <div className="flex w-full flex-col-reverse gap-1 font-Kurale">
        <textarea onChange={(e)=>setMessage(e.target.value)} className="text-lg xl:text-xl text-white input mt-2 bg-transparent border-b-2 focus:border-b-SecondaryColor focus:border-b-3 border-b-white h-12 outline-0" placeholder="Type here..."/>
        <label className=" text-white text-xl xl:text-2xl">Message</label>
        </div>
        <div className="flex mt-4 md:w-full justify-center items-center">
          <button  onClick={()=>Submit()} className="group sm:w-56 xl:w-60 sm:p-2  hover:border-3 hover:border-SecondaryColor hover:bg-transparent hover:text-SecondaryColor w-48 flex justify-center items-center gap-3 rounded-2xl bg-SecondaryColor h-10 xl:h-12 font-bold text-2xl xl:text-3xl font-Kurale">
        <span className="  text-black material-icons group-hover:text-SecondaryColor">mail</span>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;