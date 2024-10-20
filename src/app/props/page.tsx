import InfoCard from "@/components/InfoCard";

export default function Page() {
  return (
    <div>
      <InfoCard
        title="Wow did you see that"
        paragraph="foooooo barrrr"
        coolFunction={(message) => {
          console.log(message);
        }}
      />
      {/* <InfoCard title={25} paragraph='foooooo barrrr' /> */}
    </div>
  );
}
