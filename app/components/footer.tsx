export default function Footer() {
  return (
    <footer className="w-full py-4 px-8 bg-gray-200 dark:bg-gray-800">
      <p className="text-center text-gray-900 dark:text-gray-100">
        © {new Date().getFullYear()} JordanAlexandre.com. All rights reserved.
      </p>
    </footer>
  );
}