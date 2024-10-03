import { personalInformation } from "@/app/data";
import Link from "next/link";

const Appreciation = () => {
  return (
    <div className="padding-container mt-10 text-center flex justify-center flex-col items-center">
      <h4 className="text-3xl md:text-5xl font-semibold py-4 bg-gradient-to-r dark:from-green-300 dark:to-purple-300 from-green-800 to-purple-800 bg-clip-text text-transparent">
        Wow! You&apos;ve made it this far!
      </h4>
      <p className="text-medium md:text-xl font-[600] w-full md:max-w-[710px] dark:bg-gradient-to-tr from-[#f6f3d2] via-green-50 to-purple-50 bg-clip-text dark:text-transparent text-gray-600">
        Thank you for your time <span className="text-white">🙇‍♂️</span> .
        I&apos;m always open to collaborating, learning, and building exciting
        projects. Let’s connect!
        <Link
          className="md:text-2xl"
          href={personalInformation.contacts[0]["link"]}
          target="_blank"
        >
          {` ${personalInformation.contacts[0]["name"]}`}
        </Link>{" "}
      </p>
    </div>
  );
};

export default Appreciation;
