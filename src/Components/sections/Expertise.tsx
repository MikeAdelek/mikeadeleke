import React from "react";
import { FaCode, FaLaptopCode, FaPenNib } from "react-icons/fa6";
import { Card } from "@/Components/ui/Card";

const Expertise = () => {
  const expertise = [
    {
      icon: <FaCode size={40} />,
      title: "Frontend",
      description:
        "Crafting high-performance, responsive web interfaces with React, TypeScript, and Tailwind CSS — focused on scalability, accessibility, and clean architecture."
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "UI Development & System Design",
      description:
        "Developing reusable component systems and design frameworks that ensure consistency, maintainability, and a seamless user experience across applications."
    },
    {
      icon: <FaPenNib size={40} />,
      title: "Technical Writing",
      description:
        "Translating complex technical concepts into clear, developer-friendly documentation — including API references, integration guides, and deployment manuals."
    }
  ];

  return (
    <section id="expertise" className="mb-24 scroll-mt-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12">Expertise</h2>

      <div className="grid md:grid-cols-3 gap-8 text-justify">
        {expertise.map((item, index) => (
          <Card key={index}>
            <div className="flex justify-center mb-6">
              {React.cloneElement(item.icon, {
                size: 50,
                className: "opacity-80"
              })}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
