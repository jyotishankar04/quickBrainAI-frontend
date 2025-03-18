import React, { useState } from "react";
import TagInput from "../../../components/_root/notes/TagsInput";

const CreateNotePage = () => {
  const [tags, setTags] = useState([]);

  return (
    <div className="container mx-auto px-4 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Note</h1>
        <TagInput
          initialTags={tags}
          onTagsChange={setTags}
          allowCreate={true}
          placeholder="Type and press enter..."
        />
      </div>
    </div>
  );
};

export default CreateNotePage;
