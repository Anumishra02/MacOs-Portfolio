import { WindowControls } from "#components";
import windowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      {/* Window Content */}
      <div className="p-4 bg-white flex items-center justify-center h-full">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full rounded"
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image, "imgfile");
export default ImageWindow;
