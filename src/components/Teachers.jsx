import TeacherCard from "./TeacherCard";

export default function Teachers() {
  return (
    <>
      <div className="bg-[#0748395e] mx-5 rounded-lg">
        <h2 className="text-white text-3xl px-20 mb-10 pt-3">
          Meet our teachers
        </h2>
        <div className="carousel carousel-end rounded-box flex gap-5 mx-10">
          <div className="carousel-item">
            <TeacherCard />
          </div>
          <div className="carousel-item">
            <TeacherCard />
          </div>
          <div className="carousel-item">
            <TeacherCard />
          </div>
          <div className="carousel-item">
            <TeacherCard />
          </div>
          <div className="carousel-item">
            <TeacherCard />
          </div>
          <div className="carousel-item">
            <TeacherCard />
          </div>
          <div className="carousel-item">
            <TeacherCard />
          </div>
        </div>
      </div>
    </>
  );
}
