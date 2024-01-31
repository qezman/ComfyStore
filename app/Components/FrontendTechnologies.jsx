
function FrontendTechnologies() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-5 tracking-wide">Library/Tools</h2>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-3">
        {/* Chrome */}
        <TechnologyCard
          path="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png"
          name="Chrome" 
        />

        {/* GitHub */}
        <TechnologyCard
          path="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
          name="GitHub"
        />

        {/* Figma */}
        <TechnologyCard
          path="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
          name="Figma"
        />

        {/* Vercel */}
        <TechnologyCard
          path="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"
          name="Vercel"
        />

        {/* Vite */}
        <TechnologyCard
          path="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          name="Vite"
        />

        {/* npm */}
        <TechnologyCard
          path="https://www.svgrepo.com/show/368861/npm.svg"
          name="npm"
        />

        {/* VS Code */}
        <TechnologyCard
          path="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
          name="VS Code"
        />

        {/* CodePen */}
        <TechnologyCard
          path="https://blog.codepen.io/wp-content/uploads/2023/09/logo-black.png"
          name="CodePen"
        />

        {/* Git */}
        <TechnologyCard
          path="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
          name="Git"
        />
      </div>
    </div>
  );
}

function TechnologyCard({ path, name }) {
  return (
    <div className="flex w-16 h-16 transform cursor-pointer justify-center items-center rounded-xl border border-blue-gray-50 bg-white p-1 m-1 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25">
      <span className="grid w-14 h-14 items-center justify-center">
        <img src={path} alt={name} className="mx-auto w-12 h-12" />
      </span>
    </div>
  );
}

export default FrontendTechnologies;
