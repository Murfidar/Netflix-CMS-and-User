export default function tableRow({ item }) {
  return (
    <>
      <img src={item.imgUrl} alt={item.title} />
      <p> {item.title}</p>
    </>
  );
}
