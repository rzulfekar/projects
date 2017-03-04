using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SandboxConsole
{
    // Imagine we have an image. We’ll represent this image as a simple 2D array where every pixel is a 1 or a 0. 
    // The image you get is known to have a single rectangle of 0s on a background of 1s. 
    // Write a function that takes in the image and returns the coordinates of the rectangle 
    // -- either top-left and bottom-right; or top-left, width, and height.

    class Coord
    {
        public int X;
        public int Y;

        public Coord(int x, int y)
        {
            X = x;
            Y = y;
        }      
    }

    class Rectangle
    {
        public int Width;
        public int Height;
    }

    class Program
    {
        // Sample input
        static int[][] image = new int[][]
        {
          new int[] {1, 1, 1, 1, 1, 1, 1},
          new int[] {1, 1, 1, 1, 1, 1, 1},
          new int[] {1, 1, 1, 0, 0, 0, 1},
          new int[] {1, 1, 1, 0, 0, 0, 1},
          new int[] {1, 1, 1, 1, 1, 1, 1}
        };

        static List<Coord> GetRectangleCoords(int[][] image)
        {
            List <Coord> coords = new List<Coord>();
            Coord topLeftEdge = null;
            Coord bottomRightEdge = null;
            bool edgesFound = false;
            for (int row = 0; row < image.GetLength(0) && !edgesFound; row++)
            {
                for (int col = 0; col < image[row].GetLength(0) && !edgesFound; col++)
                {
                    if (image[row][col] == 0)
                    {
                        topLeftEdge = new Coord(col, row);
                        bottomRightEdge = GetBottomRight(row, col);
                        edgesFound = true;
                    }                        
                }
            }
            coords.Add(topLeftEdge);
            coords.Add(bottomRightEdge);
            return coords;
        }

        static Coord GetBottomRight(int startingRow, int startingCol)
        {
            int prevRowCoord = startingRow;
            int prevColCoord = startingCol;
            bool bottomRightFound = false;
            for (int row = startingRow + 1; row < image.GetLength(0) && !bottomRightFound; row++)
            {
                if (image[row][startingCol] == 0) prevRowCoord = row;
                else
                {
                    // start by checking the next Y position from the starting point
                    for (int col = startingCol; col < image[row].GetLength(0) && !bottomRightFound; col++)
                    {
                        if (image[prevRowCoord][col] == 0) prevColCoord = col;
                        else
                            bottomRightFound = true;
                    }
                }
            }

            return new Coord(prevColCoord, prevRowCoord);
        }
        static void Main(string[] args)
        {
            List<Coord> rectangleCoords = GetRectangleCoords(image);

            Console.WriteLine($"Top Left Edge Coord X: {rectangleCoords[0].X}. Y: {rectangleCoords[0].Y}");
            Console.WriteLine($"Bottom Right Edge Coord X: {rectangleCoords[1].X}. Y: {rectangleCoords[1].Y}");

            Rectangle rec = new Rectangle();

            rec.Width = rectangleCoords[1].X - rectangleCoords[0].X + 1;
            rec.Height = rectangleCoords[1].Y - rectangleCoords[0].Y + 1;

            Console.WriteLine($"Rectangle Width: {rec.Width}. Height: {rec.Height}");

            Console.ReadLine();
        }


        
        
    }
}
