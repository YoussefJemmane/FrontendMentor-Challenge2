
import { useEffect, useState } from 'react';
import imgd from './assets/image-product-desktop.jpg';
import imgm from './assets/image-product-mobile.jpg';
function App() {
  const [imageSrc, setImageSrc] = useState(imgd);
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 375px)").matches) {
        setImageSrc(imgm);
      } else {
        setImageSrc(imgd);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-cream grid h-screen place-items-center">

      <div className="rounded-xl grid grid-cols-2  border bg-white max-mobile:grid-cols-1 ">
        <aside className=' w-card'>
          <img src={imageSrc} alt="" className='rounded-l-xl max-mobile:rounded-t-xl max-mobile:rounded-b-none' />
          
        </aside>
        <div className='w-card p-6 '>
          <div className='mb-4'>
            <h1 className='font-montserrat text-p text-darkgrayichblue'>P E R F U M E</h1>
          </div>
          <div className='mb-5'>
            <h1 className='font-fraunces text-4xl'>Gabrielle Essance Eau De Parfum</h1>
          </div>
          <div className='mb-4'>
            <p className='text-p font-montserrat text-darkgrayichblue'>
              A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL
            </p>
          </div>

          <div className='grid grid-cols-[110px_100px] mb-4'>
            <div>
              <h1 className='text-2xl font-fraunces text-darkcyan'>
                $149.99
              </h1>
            </div>
            <div className='flex items-center'>
              <p className='font-montserrat text-darkgrayichblue '>
                <s>$169.99</s>
              </p>
            </div>
          </div>
          <button className='px-5 py-3 rounded-md bg-darkcyan w-full hover:bg-vdarkcyan flex items-center justify-center'>
            <div className='mr-4'>
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg>
            </div>
              
            
            
              <h1 className='font-montserrat text-white'>
                Add to cart
              </h1>
            

          </button>
        </div>
      </div>
    </div>
  )
}

export default App
