/**
* @author Sulaimon Lasisi  */

#include <fstream>
#include <iostream>
#include <cstdlib>
#include <string>
#include <stdlib.h>
using namespace std;

int main()
{
	ofstream outFile;
	ifstream inFile;
	inFile.open("C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\formattedEngland.csv");
	if (inFile.fail())
	{
		cerr << "Could not open the input file C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\formattedEngland.csv";
		exit(1);
	}
	outFile.open("C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\seededEngland.csv", ios::app);
	if (outFile.fail())
	{
		cerr << "Could not open the output file C:\\Users\\Aitor\\Google Drive\\UMich\\Fall 2016\\EECS 548 - Information Visualization\\Lab 1\\seededEngland.csv";
		exit(2);
	}
	string nextLine; 
	getline(inFile, nextLine);
	getline(inFile, nextLine);
	char delimiter = ',';
	size_t pos = 0;
	string gameKeys [12] = { "date" , "season", "home", "visitor", "ft", "hgoal", "vgoal", "division", "tier", "totgoal", "goaldif", "result" };
	string gameVals [12];
	while (!inFile.eof())
	{
		int i = 0;
		while ((pos = nextLine.find(delimiter)) != std::string::npos) {
			gameVals[i] = nextLine.substr(0, pos);
			nextLine.erase(0, pos + 1);
			i++;
		}
		gameVals[11] = nextLine;
		string gameLine;
		string keyPair;
		for (int i = 0; i<12; i++){
			if (i == 0 || i == 2 || i == 3 || i == 4 || i == 11){
				gameVals[i] = "\"" + gameVals[i] + "\"";
			}
			if (i == 7){
				i++;
			}
			else {
				keyPair += "\"" + gameKeys[i] + "\"" + "=>" + gameVals[i];
				if (i != 11){
					keyPair += ',';
				}
			}
			
		}
		gameLine = "Game.create(" + keyPair + ")";
		outFile << gameLine << endl;
		getline(inFile, nextLine);
	}
	outFile.close();
	inFile.close();


	system("pause");
	return 0;
} 