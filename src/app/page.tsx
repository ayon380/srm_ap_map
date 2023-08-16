"use client"
import Image from 'next/image';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
interface Building {
  id: string;
  name: string;
  images: Array<string>;

}

const buildings: Building[] = [
  { id: '1', name: 'Gate-3', images: ['images/1/1.JPG', 'images/1/2.JPG'] },
  { id: '2', name: 'Mess Lawn Area', images: ['images/2/1.jpg', 'images/2/2.jpg'] },
  { id: '3', name: 'Faculty Tower', images: ['images/3/1.jpg', 'images/3/2.jpg'] },
  { id: '4', name: 'Girls Hostel: Salon, Med Centre, Post Office', images: ['images/4/med1.jpg', 'images/4/med2.jpg', 'images/4/med3.jpg', 'images/4/med4.jpg', 'images/4/post1.jpg', 'images/4/post2.jpg', 'images/4/salon1.jpg', 'images/4/t1.jpg', 'images/4/t1t2.jpg', 'images/4/t4.jpg'] },
  { id: '5', name: 'Meteorolgy Centre', images: [ 'images/5/2.jpg', 'images/5/3.JPG'] },
  { id: '6', name: 'Girls Mess', images: ['images/6/1.jpg', 'images/6/2.jpg', 'images/6/3.jpg'] },
  { id: '7', name: 'Tree-court Area/Basketball Court', images: ['images/7/1.jpg', 'images/7/2.jpg'] },
  { id: '8', name: 'Admin Block', images: ['images/8/1.png'] },
  { id: '9', name: 'Old Academic Block', images: ['images/9/1.JPG', 'images/9/2.JPG'] },
  { id: '10', name: 'JC Bose Research Block', images: ['images/10/1.JPG'] },
  { id: '11', name: 'XLab', images: ['images/11/1.JPG', 'images/11/2.JPG'] },
  { id: '12', name: 'Boys Hostels - Vedavathi and Ganga', images: ['images/12/1.JPG', 'images/12/2.JPG', 'images/12/3.JPG'] },
  { id: '13', name: 'Mess Lawn Area', images: ['images/13/1.JPG', 'images/13/2.JPG', 'images/13/3.JPG', 'images/13/4.JPG', 'images/13/5.JPG', 'images/13/6.JPG'] },
  { id: '14', name: 'Departmental Store', images: ['images/14/1.png', 'images/14/2.png', 'images/14/3.png', 'images/14/4.png'] },

  // Add more buildings as needed
];

const MapPage = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleBuildingClick = (buildingId: string) => {
    setActivePopup(activePopup === buildingId ? null : buildingId);
  };

  return (
    <div className="map-container relative">
      <div className="lp py-5 lg:py-5  ">
        <img src="/Logo-2.png" alt="College Map" className="map-image h-14 lg:h-48 block m-auto" /></div>
      <div
        className="map-image-container"
      >
        <div className="aspect-ratio-container">
          <Image src="/main.png" width={2000} height={1000} alt="College Map" className="map-image" />
        </div>
      </div>
      {buildings.map((building) => (
        <div
          key={building.id}
          className={`fixed top-0 left-0 w-full h-full ${activePopup === building.id ? 'flex' : 'hidden'
            } bg-opacity-50 bg-gray-700 backdrop-blur-md z-10`}
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white w-full max-w-md mx-4 p-4 rounded-xl shadow-md">
              <div className="flex flex-col items-center">
                <h2 className="mb-2 font-bold">{building.name}</h2>
                <Carousel showThumbs={false}>
                  {/* Map through building.images */}
                  {building.images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={'/' + image}
                        width={500}
                        height={250}
                        alt={`Image ${index}`}
                        className="w-full  md:w-auto" // Adjust image width
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="mt-4">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setActivePopup(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="lps font-bold text-center text-4xl lg:text-6xl my-10 underline" >LEGENDS</div>
      <div className="mx-20 sm:mx-32 lg:mx-96 mb-20">
        <div className="flex flex-wrap">
          {buildings.map((building, index) => (
            <>
              <button onClick={() => handleBuildingClick(`${index + 1}`)} className="kl w-full md:w-1/2 mb-2">
                <div className="border-2 p-2 rounded-full bg-blue-600 text-white">
                  <div className="lp">
                    {index + 1} : {building.name}
                  </div>
                </div>
              </button>
            </>))}
        </div>
      </div>
      <footer className='text-center bg-black text-white'>
        <div>For Any Queries, Contact <a href="mailto:sc@srmap.edu.in">sc@srmap.edu.in</a></div><div>For Any Technical Queries, Contact
          {"  "}<a href='mailto:sarkar_ayon@srmap.edu.in'>sarkar_ayon@srmap.edu.in</a></div>
      </footer>
    </div>
  );
};

export default MapPage;
