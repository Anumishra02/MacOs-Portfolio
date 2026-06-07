import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";

const Trash = () => {
  const items = locations.trash?.children || [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <h2>Trash</h2>
      </div>

      <div className="p-4 bg-white h-full">
        <div className="grid grid-cols-3 gap-4 items-start">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img src={item.imageUrl} alt={item.name} className="w-40 h-40 object-cover rounded" />
              <p className="mt-2 text-sm text-gray-600">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TrashWindow = WindowWrapper(Trash, "trash");
export default TrashWindow;
