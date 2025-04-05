import DonationForm from "../Components/DonationForm.jsx"; // Make sure path is correct

const Donate = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Donate Food</h2>
      <DonationForm />
    </div>
  );
};

export default Donate;
