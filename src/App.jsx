import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
    'The Pragmatic Engineer': 1982,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
    'The Pragmatic Engineer': 2012,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
    'The Pragmatic Engineer': 2342,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
    'The Pragmatic Engineer': 2473,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
    'The Pragmatic Engineer': 3736,
  },
  {
    date: 'Jan 23',
    SemiAnalysis: 2784,
    'The Pragmatic Engineer': 3928,
  },
  {
    date: 'Feb 23',
    SemiAnalysis: 2979,
    'The Pragmatic Engineer': 4283,
  },
  {
    date: 'Mar 23',
    SemiAnalysis: 3275,
    'The Pragmatic Engineer': 3938,
  },
  {
    date: 'Apr 23',
    SemiAnalysis: 3689,
    'The Pragmatic Engineer': 3839,
  },
  {
    date: 'May 23',
    SemiAnalysis: 3189,
    'The Pragmatic Engineer': 3840,
  },
  {
    date: 'Jun 23',
    SemiAnalysis: 3489,
    'The Pragmatic Engineer': 3841,
  },
  {
    date: 'Jul 23',
    SemiAnalysis: 3789,
    'The Pragmatic Engineer': 3842,
  },
  {
    date: 'Aug 23',
    SemiAnalysis: 3889,
    'The Pragmatic Engineer': 3843,
  },
  {
    date: 'Sep 23',
    SemiAnalysis: 3989,
    'The Pragmatic Engineer': 3844,
  },
  {
    date: 'Oct 23',
    SemiAnalysis: 4089,
    'The Pragmatic Engineer': 3845,
  },
  {
    date: 'Nov 23',
    SemiAnalysis: 4189,
    'The Pragmatic Engineer': 3846,
  },
  {
    date: 'Dec 23',
    SemiAnalysis: 4289,
    'The Pragmatic Engineer': 3847,
  },
  {
    date: 'Jan 24',
    SemiAnalysis: 4389,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Feb 24',
    SemiAnalysis: 4489,
    'The Pragmatic Engineer': 3849,
  },
  {
    date: 'Mar 24',
    SemiAnalysis: 4589,
    'The Pragmatic Engineer': 3850,
  },
  {
    date: 'Apr 24',
    SemiAnalysis: 4689,
    'The Pragmatic Engineer': 3851,
  },
  {
    date: 'May 24',
    SemiAnalysis: 4789,
    'The Pragmatic Engineer': 3852,
  },
  {
    date: 'Jun 24',
    SemiAnalysis: 4889,
    'The Pragmatic Engineer': 3853,
  },
  {
    date: 'Jul 24',
    SemiAnalysis: 4989,
    'The Pragmatic Engineer': 3854,
  },
  {
    date: 'Aug 24',
    SemiAnalysis: 5089,
    'The Pragmatic Engineer': 3855,
  },
  {
    date: 'Sep 24',
    SemiAnalysis: 5189,
    'The Pragmatic Engineer': 3856,
  },
  {
    date: 'Oct 24',
    SemiAnalysis: 5289,
    'The Pragmatic Engineer': 3857,
  },
  {
    date: 'Nov 24',
    SemiAnalysis: 5389,
    'The Pragmatic Engineer': 3858,
  },
  {
    date: 'Dec 24',
    SemiAnalysis: 5489,
    'The Pragmatic Engineer': 3859,
  },
  {
    date: 'Jan 25',
    SemiAnalysis: 5589,
    'The Pragmatic Engineer': 3860,
  },
  {
    date: 'Feb 25',
    SemiAnalysis: 5689,
    'The Pragmatic Engineer': 3861,
  },
  {
    date: 'Mar 25',
    SemiAnalysis: 5789,
    'The Pragmatic Engineer': 3862,
  },
  {
    date: 'Apr 25',
    SemiAnalysis: 5889,
    'The Pragmatic Engineer': 3863,
  },
  {
    date: 'May 25',
    SemiAnalysis: 5989,
    'The Pragmatic Engineer': 3864,
  },
  {
    date: 'Jun 25',
    SemiAnalysis: 6089,
    'The Pragmatic Engineer': 3865,
  },
  {
    date: 'Jul 25',
    SemiAnalysis: 6189,
    'The Pragmatic Engineer': 3866,
  },
  {
    date: 'Aug 25',
    SemiAnalysis: 6289,
    'The Pragmatic Engineer': 3867,
  },
  {
    date: 'Sep 25',
    SemiAnalysis: 6389,
    'The Pragmatic Engineer': 3868,
  },
  {
    date: 'Oct 25',
    SemiAnalysis: 6489,
    'The Pragmatic Engineer': 3869,
  },
  {
    date: 'Nov 25',
    SemiAnalysis: 6589,
    'The Pragmatic Engineer': 3870,
  },
  {
    date: 'Dec 25',
    SemiAnalysis: 6689,
    'The Pragmatic Engineer': 3871,
  },
  {
    date: 'Jan 26',
    SemiAnalysis: 6789,
    'The Pragmatic Engineer': 3872,
  },
  {
    date: 'Feb 26',
    SemiAnalysis: 6289,
    'The Pragmatic Engineer': 3873,
  },
  {
    date: 'Mar 26',
    SemiAnalysis: 7089,
    'The Pragmatic Engineer': 3344,
  },
  {
    date: 'Apr 26',
    SemiAnalysis: 9089,
    'The Pragmatic Engineer': 4234,
  },
  {
    date: 'Apr 26',
    SemiAnalysis: 18089,
    'The Pragmatic Engineer': 4234,
  },
];

const valueFormatter = function (num) {
  const number =
    Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);

  return number;
};

// const valueFormatter = function (number) {
//   return '$' + new Intl.NumberFormat('us').format(number).toString();
// };

const customTooltip = function ({ payload, label, active }) {
  if (!active || !payload) return null;

  const num = payload[0]?.value;

  return (
    <div className="relative rounded-sm bg-[#d6e9fb] px-4 py-2">
      <p className="text-center text-xs text-black/60 font-medium">
        {label.split(' ')[0]}
      </p>
      <span className="font-bold text-xl text-[#2e5ce5]">
        {' '}
        {Math.abs(num) > 999
          ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
          : Math.sign(num) * Math.abs(num)}
        /month{' '}
      </span>
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 transform border-x-8 border-b-0 border-t-8 border-solid border-x-transparent border-t-[#d6e9fb]"></div>
    </div>
  );
};

export default function App() {
  return (
    <main className="min-h-screen bg-[#F5FAFE] mx-4 p-10 font-sans">
      <div className="border bg-white m-10 py-8 px-6 max-w-[900px] mx-auto shadow-lg">
        <div className="flex items-center justify-between">
          <div className="px-5">
            <select
              id="countries"
              className="border border-gray-200 px-2 cursor-pointer text-gray-500 hover:text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option className="m" selected>
                Choose a country
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="flex items-center gap-x-8">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold my-1 text-[#2D5CE5]">
                110K
              </span>
              <span className="text-xs text-[#A0A2AF] font-medium">Volume</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold my-1 text-[#25C176]">
                +99X+
              </span>
              <span className="text-xs text-[#A0A2AF] font-medium">Growth</span>
            </div>
          </div>
        </div>
        <AreaChart
          className="mt-4 w-full h-96"
          data={chartdata}
          index="date"
          showLegend={false}
          categories={['SemiAnalysis']}
          valueFormatter={valueFormatter}
          customTooltip={customTooltip}
          showAnimation={true}
          onValueChange={(e) => console.log(e)}
        />
      </div>
    </main>
  );
}
