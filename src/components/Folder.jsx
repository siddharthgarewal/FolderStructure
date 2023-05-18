import { useState } from "react";

function Folder({ explorer }) {
  console.log(explorer);
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
        <br />

        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
}

export default Folder;
