var helloworld = (function hiModule() {
  function greetings() {
    console.log('Hello, Nathan!');
  }
  function farewell() {
    console.log('Later, Nate!');
  }
  return {
    greetings: greetings,
    farewell: farewell  
  };
})();

helloworld.greetings();
helloworld.farewell();