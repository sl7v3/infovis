/**
* @author Sulaimon Lasisi  */

#include <fstream>
#include <iostream>
#include <cstdlib>
using namespace std;

int main()
{
	char next_symbol;
	ofstream outFile;
	ifstream inFile;
	inFile.open("C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\england.csv");
	if (inFile.fail())
	{
		cerr << "Could not open the input file C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\england.csv";
		exit(1);
	}
	outFile.open("C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\formattedEngland.csv");
	if (outFile.fail())
	{
		cerr << "Could not open the output file C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\formattedEngland.csv";
		exit(2);
	}
	inFile.get(next_symbol);
	while (!inFile.eof())
	{
		if (next_symbol == '\"')
			inFile.get(next_symbol);
		else {
			outFile << next_symbol;
			inFile.get(next_symbol);
		}
	}
	outFile.close();
	inFile.close();


	system("pause");
	return 0;
} 