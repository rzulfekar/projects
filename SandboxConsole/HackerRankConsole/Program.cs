using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackerRankConsole
{

    // prevRowCoord
    class Program
    {

        static void StairCase(int n)
        {
            int max = 1;
            while (max <= n)
            {
                for (int i = 0; i < n - max; i++)
                {
                    Console.Write(" ");
                }
                for (int i = 0; i < max; i++)
                {
                    Console.Write("#");
                }
                Console.WriteLine();
                max++;
            }
        }

        static int counting(string s)
        {      //01234
           // s = "00110";
            int totalGroupCount = 0;
            int countConsecutiveFirst = 0;
            int countConsecutiveSecond = 0;

            for (int i = 0; i < s.Length; i++)
            {
                countConsecutiveFirst = 0;
                countConsecutiveSecond = 0;

                string next = s[i].ToString();

                countConsecutiveFirst = GetConsecutiveCountOfNext(next, i, s);

                for (int j = i + countConsecutiveFirst; j < s.Length; j++)
                {
                    string second = s[j].ToString();

                    countConsecutiveSecond = GetConsecutiveCountOfNext(second, j, s);
                    break;
                }

                if (countConsecutiveFirst <= countConsecutiveSecond) totalGroupCount++;
            }

            return totalGroupCount;
        }

        static int GetConsecutiveCountOfNext(string numToMatch, int startingPoint, string s)
        {
            int count = 0;
            for (int i = startingPoint; i < s.Length; i++)
            {
                if (s[i].ToString().Equals(numToMatch)) count++;
                else break;
            }
            return count;
        }


        static void Main(string[] args)
        {
            int total = counting("10001");

            Console.WriteLine(total);
            Console.ReadLine();
            



        }
    }
}
