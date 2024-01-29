export function Hero() {
  return (
    <div className="sm:flex lg:grid grid-cols-2 items-center md:(grid-cols-1)">
      <div>
        <h2 className="mt-8 px-20 text-3xl text-white">Online Tutoring</h2>
        <p className="pt-1 px-20 mt-10 text-white">
          Lorem ipsum dolor sit amet consectetur. Faucibus amet bibendum amet
          aliquam. Eu scelerisque erat proin proin. Libero sed erat et vivamus
          vitae vitae. Lacinia eros mauris viverra vitae iaculis aliquet ut. Et
          arcu imperdiet amet donec nec. Blandit ut ac platea eget morbi. Diam
          id orci vitae iaculis lectus nibh. Egestas elit tellus maecenas sed a
          adipiscing faucibus. Iaculis adipiscing et id at.
        </p>
      </div>
      <img
        className="mt-8 px-3 mb-5 w-3/4 h-3/4 sm:(w-1/2 h-1/2)"
        src="hero.png"
      ></img>
    </div>
  );
}
