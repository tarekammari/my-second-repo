// Automatically import all images in the 'Reviews_image' folder
const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

// Dynamically require all images from the 'Sources/Reviews_image' directory
const imagesArray = importAll(require.context('../Reviews_image', false, /\.(png|jpe?g|svg|webp)$/));

export default imagesArray;
