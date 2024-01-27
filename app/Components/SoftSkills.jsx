

const SoftSkills = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-5 tracking-wide text-center ml-[-95px]">
        Soft Skills
      </h2>
      <div className="flex lg:items-center lg:justify-center px-3 lg:px-0">
        <div className="space-y-6 border-l-2 border-dashed">
          <SkillItem title="Adaptability" />
          <SkillItem title="Communication" />
          <SkillItem title="Collaboration" />
          <SkillItem title="Critical Thinking" />
          <SkillItem title="Teamwork" />
          <SkillItem title="Problem Solving" />
          <SkillItem title="Time Management" />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ title }) => {
  return (
    <div className="relative w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-pink-600"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-gray-700 text-xl">{title}</h4>
      </div>
    </div>
  );
};

export default SoftSkills;
