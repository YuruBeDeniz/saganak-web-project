import aboutMePic from "../images/about-me.jpg";


export default function Home() {
  return (
    <div>
     <div className='flex flex-col items-center'>
    <div className='w-48'><img src={aboutMePic} alt='portre' /></div>
    <h4>My name is Deniz 👋</h4>
    <h4>I am a part time full stack developer and a part time juggler!</h4>
    </div>
    </div>
  )
}
