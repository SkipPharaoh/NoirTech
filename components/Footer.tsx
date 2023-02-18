import { Icons, footerMenu } from "../lib/FooterMenus";
import BlogSubscription from "./BlogSubscription";
import Divider from "./Divider";
import FooterButton from "./FooterButton";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const date = new Date().getFullYear();

  const bg = {
    // background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom left",
  };

  const buttonGroup = footerMenu.map((button) => {
    return (
      <li className="my-1 lg:mx-1" key={button.name}>
        <FooterButton footerItem={button.name} footerLink={button.link} />
      </li>
    );
  });

  return (
    <footer className="bg-gray-50 text-black pb-24" style={bg}>
      <div className="w-full flex justify-center">
        <div className="container py-4">
          <ul className="lg:flex lg:justify-center text-center">
            {buttonGroup}
          </ul>
        </div>
      </div>
      <Divider />
      <div className="px-4 md:px-6">
        <div className="py-6 grid gap-6 grid-cols-1 lg:grid-cols-12">
          <section className="lg:col-span-7">
            <div className="container mx-auto md:px-20 py-16 md:pb-0 text-center h-full align-middle">
              <h2 className="text-lg font-medium">
                Sign up for our free Daily newsletter
              </h2>
              <p className="text-base">
                We'll be in your inbox every time we release a new blog post
                with the top information help you become a professional techie.
              </p>
            </div>
          </section>
          <BlogSubscription />
        </div>
      </div>
      <Divider />
      <div className="px-4 md:px-6 pb-0">
        <div className="w-full">
          <div className="container">
            <div className="pt-6 grid gap-6 lg:grid-cols-2">
              <SocialIcons Icons={Icons} />
              <div className="md:flex md:grid-cols-none items-center text-sm lg:order-first md:justify-center">
                {/* TODO: Add company name to copyright below */}
                <p className="text-gray-600 mb-4 w-full flex md:flex md:justify-center ">
                  Copyright &copy; {date} BLK Tech ODB. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
