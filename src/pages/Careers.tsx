import FormfacadeEmbed from "@formfacade/embed-react";
import { div } from "framer-motion/client";

const Careers = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-36 px-4 sm:px-6 lg:px-8">
    <FormfacadeEmbed
      formFacadeURL="https://formfacade.com/include/110655963396733502444/form/1FAIpQLSf8wN9XhmVB_iD47Ae105Qq4I6G2bBeniEdFPA9UiEa0VAUYA/classic.js/?div=ff-compose"
      onSubmitForm={() => console.log('Form submitted')}
    />
    </div>
    
  )
}

export default Careers;