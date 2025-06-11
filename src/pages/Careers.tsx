import FormfacadeEmbed from "@formfacade/embed-react";
import { div } from "framer-motion/client";

const Careers = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-36 px-4 sm:px-6 lg:px-8">
    <FormfacadeEmbed
      formFacadeURL="https://formfacade.com/include/100831857621277081987/form/1FAIpQLSe0svQb8Gaw2OfUUF9y6H94zwcFiIN6RAhfRaWzW0W1E0foPg/classic.js/?div=ff-compose"
      onSubmitForm={() => console.log('Form submitted')}
    />
    </div>
    
  )
}

export default Careers;