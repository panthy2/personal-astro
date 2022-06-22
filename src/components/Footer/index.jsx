import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <footer id="Contact" className=" w-full  sm:gap-[100px]  mt-[111px] flex  justify-between mb-[60px] ">
      <header className=" text-[20px]">CONTACT </header>
      <div className="flex  justify-end  w-auto  flex-wrap  text-[Inter] text-[18px] gap-[12px]">
        <a href={"mailto:fahad.alhatshami@hotmail.com"} >
         
          <a className="SocialBtn">
          <GrMail /> <p>Send an email</p>
          </a>
          
        </a>
        <a href={"https://www.aedin.com/in/fahadalhatshami/"} >
          <a className="SocialBtn">
          <BsLinkedin /> <p>aedIn</p>
          </a>
        </a>
        <a href={"https://github.com/Panthyy"} >
          <a className="SocialBtn">
          <BsGithub /> <p>Github</p>
          </a>
        </a>
      </div>
    </footer>
  );
}
export { Footer };
