import { facts } from "./facts.ts";

export interface Fact {
  fact: string;
  picture: string[];
}

export interface Factoid {
  fact: Fact;
  id: number;
}

export function getFactFromId(id: number): Fact | null {
  return facts.at(id) ?? null;
}

export function getAllFacts(): Fact[] {
  return facts;
}

export function getRandomFact(): Fact {
  return facts[getRandomFactId()];
}

export function getRandomFactId(): number {
  return Math.floor(Math.random() * facts.length);
}

export function getFactsFromPageNum(
  page: number,
  factsPerPage = 10,
): Fact[] {
  if (page < 1 || factsPerPage < 1) {
    return [];
  }
  const start = getStartIdx(page, factsPerPage)!;
  const end = start + factsPerPage;
  return facts.slice(start, end);
}

export function getStartIdx(page: number, factsPerPage = 10): number | null {
  if (page < 1 || factsPerPage < 1) {
    return null;
  }
  return (page - 1) * factsPerPage;
}

export function isLastPage(page: number, factsPerPage = 10): boolean {
  return page === Math.ceil(facts.length / factsPerPage);
}

export function searchFacts(query: string): Factoid[] {
  const facts = getAllFacts();
  return facts.map((fact, id) => {
    return { fact, id };
  }).filter((factoid) => factoid.fact.fact.toLowerCase().includes(query));
}
