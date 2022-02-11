import AppContext, { useAppContext } from "../context/appContext";

export default function ToggleTheme() {
  const context = useAppContext(AppContext);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        context.setSwitchTheme(
          context.switchTheme === "dark" ? "light" : "dark"
        );
      }}
      className="bg-blue-400 px-2 rounded-md text-white w-fit hover:bg-blue-700"
    >
      Switch Theme
    </button>
  );
}
