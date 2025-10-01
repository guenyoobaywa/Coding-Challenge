function App() {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get('newsletter'));
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="newsletter" className="flex gap-3 items-center">
          Newsletter Anmeldung
          <input type="text" id="newsletter" name="newsletter" className="p-1" />
        </label>
        <button type="submit">Anmelden</button>
      </form>
    </div>
  );
}

export default App;
