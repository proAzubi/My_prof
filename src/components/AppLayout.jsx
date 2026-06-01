const AppLayout = ({ children }) => {  
  return (  
    <div  
      style={{  
        background: "#1d1d1d",  
        margin: "0",  
        padding: "0",  
        minHeight: "100vh", // Ensure it covers the full height of the viewport  
        overflowX: "hidden",
      }}  
    >  
      {children}  
    </div>  
  );  
};  

export default AppLayout;