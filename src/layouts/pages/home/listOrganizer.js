import OrganizerCard from "../../../components/organizer";

const OrganizerData = [
  {
    id: 1,
    name: "Hello world",
    follower: 100,
  },
  {
    id: 2,
    name: "Hello world",
    follower: 100,
  },
  { id: 3, name: "Hello world", follower: 100 },
];

const ListOrganizer = () => {
  return (
    <section className=" container grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4  py-[50px] lg:py-[100px]">
      {OrganizerData.map((data) => {
        return (
          <OrganizerCard
            name={data.name}
            follower={data.follower}
            key={data.id}
          />
        );
      })}
    </section>
  );
};
export default ListOrganizer;
