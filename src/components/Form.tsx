import { FC, useState } from 'react';
import { useStateMachine } from 'little-state-machine';
import { updateJSONData } from '../state/updateState';

const Form: FC = () => {
  const { actions } = useStateMachine({
    updateJSONData,
  });

  const [files, setFiles] = useState<any>();

  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = (e) => {
      console.log('e.target.result', e?.target?.result);
      setFiles(e?.target?.result);
      const parsed = JSON.parse(files);
      console.log('parse:', JSON.parse(e?.target?.result));
      actions.updateJSONData({ parsed });
    };
  };

  return (
    <section>
      <h1>Upload Json file and storing it in session storage- Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {'uploaded file content -- ' + files}
    </section>
  );
};

export default Form;
