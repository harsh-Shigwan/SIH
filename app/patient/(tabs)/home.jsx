import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PatientNavbar } from '../../components/patient/PatientNavbar';

// ArticleCard Component
const ArticleCard = ({ imageUrl, title, date, readTime }) => {
  return (
    <View className="flex gap-3 px-2.5 py-2 mt-4 bg-white rounded-md border border-solid border-stone-800 border-opacity-10">
      <Image
        loading="lazy"
        source={{ uri: imageUrl }}
        className="object-contain shrink-0 rounded-md aspect-[1.04] w-[55px]"
      />
      <View className="flex flex-col self-start">
        <View className="flex gap-5 justify-between text-xs font-semibold leading-4 text-neutral-600">
          <View>
            <Text>{title}</Text>
          </View>
          <Image
            loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/88236f0491b18d47960816a83e71d4fc19b1be8ed1536127619b45fb7a386174?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
            }}
            className="object-contain shrink-0 self-start aspect-square w-[15px]"
          />
        </View>
        <View className="flex gap-2 self-start mt-1.5 text-xs font-medium text-stone-800 text-opacity-40">
          <View className="grow">
            <Text>{date}</Text>
          </View>
          <View>
            <Text>{readTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <View className="flex gap-3 px-6 py-2.5 text-xs rounded-3xl border border-emerald-50 border-solid bg-zinc-50 text-stone-800 text-opacity-40">
      <Image
        loading="lazy"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/65389c98d9522c5c98d62bb1c10e3be63ec77399cdc6be3eaf67b65c5e2a332c?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
        }}
        className="object-contain shrink-0 self-start aspect-square w-[18px]"
      />
      <View className="grow shrink w-[216px]">
        <Text>Search doctor, drugs, articles...</Text>
      </View>
    </View>
  );
};

// Main Component
const PatientHome = () => {
  const articles = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/59c4efec575bd087cef6489cc42e784d1ef3e9b0ee5943550eb8afb98313cb81?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      title: "The 25 Healthiest Fruits You Can Eat, According to a Nutritionist",
      date: "Jun 10, 2023",
      readTime: "5min read",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/21508a55174870ac82cfd307d59f085bc0f3430fe98fa2a986124e33fe8c5636?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      title: "The Impact of COVID-19 on Healthcare Systems",
      date: "Jul 10, 2023",
      readTime: "5min read",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1f668630af12b199f3afd95df122d827f0ff1ddac7b1d042b1aba472d9e75e2b?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
      title: "Tips for Better Mental Health During the Pandemic",
      date: "Aug 15, 2023",
      readTime: "3min read",
    },
  ];

  return (
    <View className="flex overflow-hidden flex-col bg-white max-w-[360px]">
      <View className="flex overflow-hidden flex-col items-center pt-3 w-full bg-blue-500 bg-opacity-40">
        <View className="flex gap-5 justify-between w-full text-sm text-center whitespace-nowrap max-w-[309px] text-stone-800">
          <View>
            <Text>9:40</Text>
          </View>
          <Image
            loading="lazy"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a29ab04e53641b7dbed3e08236f1f5533133338fe559e5e087245be07b69aa09?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
            }}
            className="object-contain shrink-0 my-auto rounded-none aspect-[6.29] w-[69px]"
          />
        </View>
        <View className="flex z-10 mt-8 w-full max-w-[300px]">
          <View className="flex z-10 flex-col flex-1 items-start self-end mt-4 max-sm:pb-6">
            <Image
              loading="lazy"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/008c604aa3026925f23028c678bb7555e1254e17d52d520e6f1ddbe6260b525f?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
              }}
              className="object-contain w-12 rounded-full aspect-square"
            />
            <View className="mt-4 text-base font-medium text-stone-800">
              <Text>Welcome!</Text>
            </View>
            <View className="text-base font-light text-stone-800">
              <Text>Ruchita</Text>
            </View>
            <View className="self-stretch mt-4 text-sm font-medium text-stone-800 text-opacity-50">
              <Text>How is it going today?</Text>
            </View>
            <View className="flex gap-2 mt-10">
              <Image
                loading="lazy"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/56d2516f19e3142fb7cc88843a4609d68c9eda1a8f1508a5a06f3bc144f0bfc2?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
                }}
                className="object-contain shrink-0 aspect-[15.87] w-[63px]"
              />
              <Image
                loading="lazy"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ee85927382b7fe9180af27cc22a5f660830b6450c8f64dfcb84217e5ea79934?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
                }}
                className="object-contain shrink-0 aspect-[15.87] w-[63px]"
              />
            </View>
          </View>
          <View className="flex relative flex-col items-end px-8 pt-40 pb-8 w-40 aspect-[0.669]">
            <Image
              loading="lazy"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe093b7dd33a9500abeb972df64d6c60bfdde7672c5125fc3c8038aed8709312?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
              }}
              className="object-cover absolute inset-0 size-full"
            />
            <Image
              loading="lazy"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a50193eb3bf6dff9b7963d7d8cb2f7a3195064d93001902571dea049dac606f1?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
              }}
              className="object-contain w-14 aspect-square"
            />
          </View>
        </View>
        <View className="flex z-10 flex-col self-stretch px-8 pt-5 mb-0 w-full bg-white rounded-none">
          <SearchBar />
          <View className="flex gap-1 mt-5">
            <View className="flex flex-col text-base font-semibold text-stone-800">
              <Image
                loading="lazy"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a89643f6846dc689e0cfdc89c8b2fea112fe721f63a5d9d545b849d97b52718?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
                }}
                className="object-contain ml-4 rounded-none aspect-[0.72] w-[54px]"
              />
              <View className="mt-8">
                <Text>Health article</Text>
              </View>
            </View>
            <View className="flex flex-col self-start">
              <View className="flex gap-5 justify-between">
                <Image
                  loading="lazy"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d2137dbbfbbe0c0f0cbc67286c532f405141e8475ca90d1f262399cd4819fb0?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
                  }}
                  className="object-contain shrink-0 rounded-none aspect-[0.99] w-[74px]"
                />
                <Image
                  loading="lazy"
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d124bf90c045a6e93a0fa89984493292b6a3fb14000462e774bbadad8b6bd0a?placeholderIfAbsent=true&apiKey=abdee94ac70c4c57afd053b3a4b32b3c",
                  }}
                  className="object-contain shrink-0 rounded-none aspect-[1.09] w-[82px]"
                />
              </View>
              <View className="self-end mt-9 text-xs text-blue-500 text-opacity-80">
                <Text>See all</Text>
              </View>
            </View>
          </View>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </View>
      </View>
      <PatientNavbar />
    </View>
  );
};

export default PatientHome;
