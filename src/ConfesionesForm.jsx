import { useForm, usePost } from '@brightleaf/react-hooks'

function ConfesionesForm({ handleOnSubmit }) {
  const { addToForm, onSubmit } = useForm()

  return (
    <form
      onSubmit={onSubmit(handleOnSubmit)}
      className="confesiones-form"
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        display: 'flex',
        background: '#fff5ce',
        fontSize: 24,
        zIndex: 2
      }}
    >
      <input
        type="text"
        name="content"
        ref={addToForm}
        style={{
          flex: '1 0 auto',
          border: 'none',
          background: 'rgba(255,255,255,0)',
          fontSize: 24
        }}
        placeholder="Dime un secreto"
        autoFocus
      />
      <button
        type="submit"
        style={{
          background: '#000',
          color: '#fff',
          borderRadius: 0
        }}
      >OK</button>
    </form>
  );
}


export default ConfesionesForm;
