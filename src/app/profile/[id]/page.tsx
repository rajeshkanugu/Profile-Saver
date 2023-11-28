const useClient = ({params}:{params: {id: string}}) => {
  return (
    <div>
      <h1>Client {params.id}</h1>
    </div>
  );

};

export default useClient;
