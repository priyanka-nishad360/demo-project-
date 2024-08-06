import React from "react";
import Card from "../../../styles/cardStyles";
import car from "../../../../public/icons/car.png";
import bike from "../../../../public/icons/bike.png";
import health from "../../../../public/icons/health.png";

const BajajCapital = () => {
  return (
    <main>
      <div className="flex justify-center my-8 gap-12 items-center flex-col">
        <div>
          <h1 className="text-white bg-primary px-4 py-2 text-2xl rounded-md">Choose your Insurance</h1>
        </div>

        <div className="flex gap-12 flex-wrap justify-center items-center">
          <Card logo={car} href={"#"}>
            Car Insurance
          </Card>
          <Card
            logo={bike}
            href={"#"}
            color="rgb(255, 190, 64)"
            shadow="rgb(255, 190, 64, .4)"
          >
            Bike Insurance
          </Card>
          <Card
            logo={health}
            href={"#"}
            color="rgb(255, 99, 100)"
            shadow="rgb(255, 99, 100, .4)"
          >
            Health Insurance
          </Card>
        </div>
      </div>
    </main>
  );
};

export default BajajCapital;
