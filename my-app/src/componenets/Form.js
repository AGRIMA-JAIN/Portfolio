// import "./FormStyles.css";
// import React from "react";

// const Form = () => {
//   return (
//     <div className="form">
//       <form>
//         <label>Your Name</label>
//         <input type="text"></input>

//         <label>Email</label>
//         <input type="email"></input>

//         <label>Subject</label>
//         <input type="text"></input>

//         <label>Message</label>
//         <textarea rows="6" placeholder="Type Your Message Here"></textarea>
//         <button className="btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
// import emailjs from "@emailjs/browser";
// import "./FormStyles.css";
// import React, { useRef, useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     user_subject: "",
//     message: "",
//   });
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_whitblc", "template_gnlmsbb", form.current, {
//         publicKey: "JXgLTGy8eYJgmd2Hz",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");

//           setFormData({
//             user_name: "",
//             user_email: "",
//             user_subject: "",
//             message: "",
//           });

//           setFormData.user_name = "";
//           setFormData.user_email = "";
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send form data to backend
//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Email sent successfully!");
//       } else {
//         alert("Failed to send email.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while sending the email.");
//     }
//   };

//   return (
//     <div className="form">
//       <form ref={form} onSubmit={sendEmail}>
//         <label>Your Name</label>
//         <input
//           id="name1"
//           type="text"
//           name="user_name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <label>Email</label>
//         <input
//           id="email1"
//           type="email"
//           name="user_email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label>Subject</label>
//         <input
//           id="sub"
//           type="text"
//           name="user_subject"
//           value={formData.subject}
//           onChange={handleChange}
//         />

//         <label>Message</label>
//         <textarea
//           id="msg"
//           rows="6"
//           name="message"
//           placeholder="Type Your Message Here"
//           value={formData.message}
//           onChange={handleChange}
//         ></textarea>
//         <button className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

import emailjs from "@emailjs/browser";
import "./FormStyles.css";
import React, { useRef, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_whitblc", "template_gnlmsbb", form.current, {
        publicKey: "JXgLTGy8eYJgmd2Hz",
      })
      .then(
        () => {
          // Show success alert
          window.alert("Your message has been sent successfully!");

          // Reset form data after successful email send
          setFormData({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);

          // Show failure alert
          window.alert("Failed to send the message. Please try again.");
        }
      );
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input
          id="name1"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          id="email1"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />

        <label>Subject</label>
        <input
          id="sub"
          type="text"
          name="user_subject"
          value={formData.user_subject}
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          id="msg"
          rows="6"
          name="message"
          placeholder="Type Your Message Here"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
