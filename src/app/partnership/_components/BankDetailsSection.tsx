import NotebookBackgroundWrapper from "@/components/NotebookBackgroundWrapper";
import Image from "next/image";

interface BankAccount {
  currency: string;
  icon: string;
  accountNumber: string;
  bank: string;
  accountName: string;
}

const bankAccounts: BankAccount[] = [
  {
    currency: "Naira Account",
    icon: "/icon/partnership/naira.svg",
    accountNumber: "0712442571",
    bank: "GTBank",
    accountName: "EveryChild International",
  },
  {
    currency: "Dollar Account",
    icon: "/icon/partnership/dollar.svg",
    accountNumber: "0938595273",
    bank: "GTBank",
    accountName: "EveryChild International",
  },
  {
    currency: "Pound Account",
    icon: "/icon/partnership/euro.svg",
    accountNumber: "0938595280",
    bank: "GTBank",
    accountName: "EveryChild International",
  },
];

export default function BankDetailsSection() {
  return (
    <section className="bg-white py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-wide text-gray-600 mb-4">
            BANK DETAILS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-gray-900">
            Your Donation. Their Future.
          </h2>
        </div>

        <NotebookBackgroundWrapper
          bgMobile="bg-[url('/patterns/notebook-green-mobile.png')]"
          bgDesktop="bg-[url('/patterns/notebook-green.png')]"
        >
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 py-[76px] lg:px-[100px] px-4 ">
            {bankAccounts.map((account) => (
              <div
                key={account.currency}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-[0px_3px_10px_0px_#44569640]"
              >
                {/* Currency Icon */}
                <div className="flex  mb-6">
                  <div className=" bg-secondary-yellow rounded-full flex items-center ">
                    <Image
                      src={account.icon}
                      alt={`${account.currency} icon`}
                      width={48}
                      height={48}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold font-display text-gray-900 mb-6">
                  {account.currency}
                </h3>

                <div className="space-y-3 text-left">
                  <div>
                    <span className="text-sm text-gray-600">
                      Account Number:{" "}
                    </span>
                    <span className="font-medium font-display text-gray-900  ">
                      {account.accountNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Bank: </span>
                    <span className="font-medium font-display text-gray-900">
                      {account.bank}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">
                      Account Name:{" "}
                    </span>
                    <span className="font-medium font-display   ">
                      {account.accountName}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NotebookBackgroundWrapper>
      </div>
    </section>
  );
}
