function Contact() {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert("Message Snt!");
        e.currentTarget.reset();
    };


  return (
    <div className="ContactBody">
      <section className="contact-hero">
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations or questions.</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required  />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Send Message</button>
        </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
