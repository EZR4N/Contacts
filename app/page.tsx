import Title from "./components/Title/Title";
import NewContact from "./components/NewContact/NewContact";
import ContactsList from "./components/Contacts/ContactsList";
export default function Home() {
  return (
    <div className="flex align-top min-h-screen items-center justify-center bg-[#FAF8F5] font-sans ">
      <div className="w-1/2 flex flex-col">
        <Title />
        <div className="w-full border-2 border-gray-300 rounded-lg ">
          <NewContact />
        </div>
        <h3 className="text-lg font-bold text-[#24211C] mt-4 mb-3">Contactos (hardcoded)</h3>
        <ContactsList />
      </div>

    </div>
  );
}
