function App() {
  // Create state for your todo list and form inputs here

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="todoInput"
        style={{
          marginTop: "40px",
          width: "50%",
        }}
      >
        {/* 
          You will have to modify the code for the form and its inputs
          below to utilize your state variables above. Make sure the form 
          also clears on submission.
        */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input placeholder="Task name"></input>
          <select defaultValue="medium">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input placeholder="Description"></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div
        style={{
          height: "2px",
          margin: "40px 0px 40px 0px",
          backgroundColor: "lightgray",
          width: "100%",
        }}
      ></div>
      <div className="todoList">
        {/* 
          You should display your todo list items here. Consider making 
          custom components to display each list item. Each list item should
          display its task name, priority, and description.
        */}
      </div>
    </div>
  );
}

export default App;
