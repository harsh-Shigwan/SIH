import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

const DoctorCard = ({ name, specialty, distance, imageUrl }) => {
  return (
    <View className="flex gap-4 py-2.5 pr-16 pl-2.5 mt-5 max-w-full text-xs bg-white rounded-md border border-solid border-stone-800 border-opacity-10 text-stone-800 text-opacity-40 w-[300px]">
      <Image
        loading="lazy"
        source={{ uri: imageUrl }}
        className="object-contain shrink-0 w-24 rounded-none aspect-square"
      />
      <View className="flex flex-col">
        <View className="self-start text-base font-semibold text-stone-800">
          <Text>{name}</Text>
        </View>
        <View className="mt-1.5">
          <Text>{specialty}</Text>
        </View>
        <View className="flex shrink-0 mt-3 rounded-sm bg-blue-500 bg-opacity-20 h-[18px] w-[41px]" />
        <View className="flex gap-1 mt-1.5">
          <Image
            loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2223714e5e779b383aa3af1ddb590dfe936363f9a36f5dcdd9ca54a4c6298345?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
            }}
            className="object-contain shrink-0 self-start aspect-square w-[13px]"
          />
          <View>
            <Text>{distance}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View className="flex gap-3 px-6 py-2.5 mt-3.5 text-xs rounded-3xl border border-emerald-50 border-solid bg-zinc-50 text-stone-800 text-opacity-40">
      <Image
        loading="lazy"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f27def8646d38134714af1aaab8c5eb3c26efcc7974caa0739d6fbbc6847405?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
        }}
        className="object-contain shrink-0 self-start aspect-square w-[18px]"
      />
      <TextInput
        className="grow shrink w-[216px]"
        placeholder="Search doctor..."
        accessibilityLabel="Search for a doctor"
      />
    </View>
  );
};

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Rishi',
    specialty: 'Chardiologist',
    distance: '800m away',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/2fc2cfbf33579101941be44fe5d4f1344639274ca709e6c334861e6a48060139?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
  },
  {
    id: 2,
    name: 'Dr. Vaamana',
    specialty: 'Dentists',
    distance: '800m away',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/fe42fd9a06142e54af31f43e68dfb1c79a9f32cf5b52703578d68e42d73aa783?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
  },
  {
    id: 3,
    name: 'Dr. Nallarasi',
    specialty: 'Orthopaedic',
    distance: '800m away',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/d547aa6fecc2be6ee393ca8b45248aacbdb430c2eea0526380be55468b8b21d6?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
  },
  {
    id: 4,
    name: 'Dr. Nihal',
    specialty: 'Chardiologist',
    distance: '800m away',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/7daeee371780219e7ac945c35a1f18051827d9e42066c2a7c5e7f0832c251cc3?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
  },
  {
    id: 5,
    name: 'Dr. Rishita',
    specialty: 'Chardiologist',
    distance: '800m away',
    imageUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/46c2da45520124a3ffda40617d8d8ce424590e836b6322df87b8e8fea348ac66?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c',
  },
];

const PatientTopDoctors = () => {
  return (
    <View className="flex overflow-hidden flex-col items-center pt-5 font-medium bg-white max-w-[360px]">
      <View className="flex flex-col self-stretch px-8 w-full">
        <View className="flex gap-5 justify-between max-w-full text-base font-semibold text-center text-stone-800 w-[184px]">
          <View className="flex shrink-0 rounded-lg bg-blue-500 bg-opacity-20 h-[43px] w-[43px]" />
          <View className="my-auto">
            <Text>Doctors</Text>
          </View>
        </View>

        <SearchBar />

        <View className="flex self-end mt-3 text-base whitespace-nowrap text-blue-500 text-opacity-80">
          <Image
            loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb4efff07aeeddae37be7bc9cc4e6d075f8882691b1b1a765344d02fb6acae03?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
            }}
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <View>
            <Text>Filter</Text>
          </View>
        </View>
      </View>

      {doctorsData.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          name={doctor.name}
          specialty={doctor.specialty}
          distance={doctor.distance}
          imageUrl={doctor.imageUrl}
        />
      ))}
    </View>
  );
};

export default PatientTopDoctors;
