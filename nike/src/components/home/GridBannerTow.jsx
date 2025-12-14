import BannerCart from "../props/cart/BannerCart";

const GridBannerTow = () => {
  const listData = [
    {
      image: "/src/assets/bannerHome/bann.jpg",
      title: "Unleash Your Powser",
      subTitile: "Nike x Stranger Things",
      btn: "Shop",
      Link: "",
    },
    {
      image: "/src/assets/bannerHome/ba2.jpg",
      title: "Low Light, Hight Voltage",
      subTitile: "Air jordan 11 'Gamma'",
      btn: "Shop",
      Link: "",
    },
  ];

  return (
    <div className="grid grid-cols-2 ">
      {listData.map((e, i) => (
        <div key={i}>
          <BannerCart
            image={e.image}
            nameBtn={e.btn}
            bigText={e.title}
            smallText={e.subTitile}
          />
        </div>
      ))}
    </div>
  );
};

export default GridBannerTow;
