import { Carousel, Sidebar } from "flowbite-react";

export default function Hero() {
  return (
    <div className="container">
      <div className="grid grid-cols-12">
        <aside className="hidden md:block col-span-12 md:col-span-2">
          <div className="w-full md:w-fit h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-y-auto">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#">Dashboard</Sidebar.Item>
                  <Sidebar.Collapse label="E-commerce">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                    <Sidebar.Item href="#">Product 2</Sidebar.Item>
                    <Sidebar.Item href="#">Product 3</Sidebar.Item>
                    <Sidebar.Item href="#">Product 4</Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item href="#">Inbox</Sidebar.Item>
                  <Sidebar.Item href="#">Users</Sidebar.Item>
                  <Sidebar.Item href="#">Products</Sidebar.Item>
                  <Sidebar.Item href="#">Sign In</Sidebar.Item>
                  <Sidebar.Item href="#">Sign Up</Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </aside>
        <div className="col-span-12 md:col-span-10">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>

         
        </div>
      </div>
    </div>
  );
}
