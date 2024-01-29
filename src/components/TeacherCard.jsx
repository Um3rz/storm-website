export default function () {
  return (
    <a
      href="#"
      class=" relative block  overflow-hidden  bg-red-500 rounded-lg  mb-5 p-4 sm:p-6 lg:p-8 shadow-lg"
    >
      {/* <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}

      <div class="sm:flex w sm:justify-between sm:gap-4 ">
        <div>
          <h3 class="text-lg font-bold text-gray-100 sm:text-xl">
            Building a SaaS product as a software developer
          </h3>

          <p class="mt-1 text-xs font-medium text-gray-100">By John Doe</p>
        </div>

        <div class="hidden sm:block sm:shrink-0">
          <img
            alt="Paul Clapton"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            class="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div class="mt-4">
        <p class="max-w-[40ch] text-sm text-gray-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
          illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
      </div>

      <dl class="mt-6 flex gap-4 sm:gap-6">
        <div class="flex flex-col-reverse">
          <dt class="text-sm font-medium text-gray-100">Published</dt>
          <dd class="text-xs text-gray-100">31st June, 2021</dd>
        </div>

        <div class="flex flex-col-reverse">
          <dt class="text-sm font-medium text-gray-100">Reading time</dt>
          <dd class="text-xs text-gray-100">3 minute</dd>
        </div>
      </dl>
    </a>
    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img
    //       src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //       alt="teacher"
    //       className="rounded-xl"
    //     />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">Teacher Name</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
    //       iste accusantium eaque, harum dolores distinctio animi a ut sunt
    //       cumque ipsum quasi .
    //     </p>
    //     <div className="card-actions">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
  );
}
